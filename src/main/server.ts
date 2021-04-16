import env from './config/env';

const runServer = async() => {
    const app = (await import('./config/app')).default;
    app.listen(env.server.port, () => console.log(`server open on ${env.server.port} !!!`));
}

runServer();
