import P from 'pino';
export default P({ level: 'warn', timestamp: () => `,"time":"${new Date().toJSON()}"` });