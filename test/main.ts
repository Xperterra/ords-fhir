import {Server} from '../src/index';

export const server: Server = new Server({
    config: {
        limit_upload_mb: 1,
        port: 8000,
        whitelist: []
    },
    conformance: {
        acceptUnknown: true,
        date: 'change',
        kind: 'change'
    }
});
