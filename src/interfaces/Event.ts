import { Bot } from '../client/Client';

export interface RunEventFunction {
	(client: Bot, args: any[]): Promise<any>;
}

export interface Event {
	name: string;
	run: RunEventFunction;
}
