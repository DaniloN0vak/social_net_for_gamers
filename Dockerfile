# Frontend
FROM node:20 AS frontend
WORKDIR /app
COPY front_net/ ./front_net/
WORKDIR /app/front_net
RUN npm ci && npm run build

# Backend
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY Social_network/ ./Social_network/
COPY Social_network.sln .
RUN dotnet publish "Social_network/Social_network.csproj" -c Release -o /app/publish

# Runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=build /app/publish .
COPY --from=frontend /app/front_net/dist ./wwwroot
EXPOSE 80
ENTRYPOINT ["dotnet", "Social_network.dll"]
