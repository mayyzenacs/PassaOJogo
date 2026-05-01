using System.Text;
using FastEndpoints;
using FastEndpoints.Swagger;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

var config = builder.Configuration;

var connectionString = config.GetConnectionString("Default");

var jwtIssuer = config["Jwt:Issuer"];
var jwtAudience = config["Jwt:Audience"];
var jwtSigningKey = config["Jwt:SigningKey"];

builder.Services.AddDbContext<AppDbContext>(opt =>
    opt.UseNpgsql(connectionString));

builder.Services.AddFastEndpoints();

builder.Services.SwaggerDocument(o =>
{
    o.DocumentSettings = s =>
    {
        s.Title = "PassaOJogo API";
        s.Version = "v1";
    };
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("web", p =>
        p.WithOrigins("http://localhost:3000")
         .AllowAnyHeader()
         .AllowAnyMethod());
});

var signingKeyBytes = Encoding.UTF8.GetBytes(jwtSigningKey);

builder.Services
    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(o =>
    {
        o.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuer = jwtIssuer,

            ValidateAudience = true,
            ValidAudience = jwtAudience,

            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(signingKeyBytes),

            ValidateLifetime = true,
            ClockSkew = TimeSpan.FromMinutes(1)
        };
    });

builder.Services.AddAuthorization();

var app = builder.Build();

app.UseCors("web");

app.UseAuthentication();
app.UseAuthorization();

app.UseFastEndpoints();

app.UseSwaggerGen();

app.Run();