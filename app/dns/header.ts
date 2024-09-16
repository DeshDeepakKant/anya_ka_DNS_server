import { Buffer } from "buffer";

export enum OpCode {
	STANDARD_QUERY = 0,
}

export enum ResponseCode {
	NO_ERROR = 0,
	FORMAT_ERROR = 1,
}

export interface TDNSHeader {
	id: number;       // id of queries and response packets
	qr: number;       // 0 for a question, 1 for response
	opcode: OpCode;   // kind of query
	aa: number;       // 1 if response owner owns the server
	tc: number;       // exceed lim to truncate
	rd: number;       // recursion desired?
	ra: number;       // recursion available?
	z: number;        // reserved or not
	rcode: ResponseCode; // status of response
	qdcount: number;  // query count
	ancount: number;  // answer count
	nscount: number;  // nameserver count
	arcount: number;  // authority count
}

export class DNSHeader {
	static write(values: TDNSHeader) {
		const header = Buffer.alloc(12);

		const flags = 
			(values.qr << 15) |
			(values.opcode << 11) |
			(values.aa << 10) |
			(values.tc << 9) |
			(values.rd << 8) |
			(values.ra << 7) |
			(values.z << 4) |
			values.rcode;

		header.writeUInt16BE(values.id, 0);
		header.writeUInt16BE(flags, 2);
		header.writeUInt16BE(values.qdcount, 4);
		header.writeUInt16BE(values.ancount, 6);
		header.writeUInt16BE(values.nscount, 8);
		header.writeUInt16BE(values.arcount, 10);

		return header;
	}
}

export default DNSHeader;
