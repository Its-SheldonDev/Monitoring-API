
# Monitoring API 📣

This api is used to monitor all my services and display them on Bettestack.


## API Reference

#### Get service status

```http
  HTTP GET /check?service=YourService
```

| Parameter |  Result                |
| :-------- |  :------------------------- |
| `YourService` |  **200** or **500** |





## Installation 🖥️

Install with npm ✨

```bash
  git clone https://github.com/Its-SheldonDev/Monitoring-API
  cd Monitoring-API
  npm install
  npm run start
```

    
## Deployment 📜

To deploy this project with docker run

```bash
  docker build -t monitoring .
  docker run -p 3000:3000 -v your/config/path/config.json:/app/config.json monitoring

```


## Authors 🖐️

- [Its-SheldonDev](https://www.github.com/Its-SheldonDev)


## Support

For support, email contact@sheldon-dev.fr or join our [Discord](https://discord.sheldon-dev.fr).

