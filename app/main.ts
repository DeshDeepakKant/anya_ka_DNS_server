import * as dgram from "dgram";
import { TDNSHeader, OpCode, ResponseCode, DNSHeader } from "./dns/header";

const defaultHeaders: TDNSHeader = {
	id: 1234,
	qr: 1, // 1 for response, 0 for query
	opcode: OpCode.STANDARD_QUERY,
	aa: 0, // authoritative answer
	tc: 0, // not truncated
	rd: 0, // recursion not desired
	ra: 0, // recursion not available
	z: 0,  // reserved
	rcode: ResponseCode.NO_ERROR, // no error
	qdcount: 0, // query count
	ancount: 0, // answer count
	nscount: 0, // nameserver count
	arcount: 0, // additional resource count
};

const udpSocket: dgram.Socket = dgram.createSocket("udp4"); // IPv4

udpSocket.bind(2053, "127.0.0.1", () => {
	console.log("UDP server listening on port 2053");
});

udpSocket.on("message", (data: Buffer, remoteAddr: dgram.RemoteInfo) => {
	try { 
		console.log(`Received data from ${remoteAddr.address}:${remoteAddr.port}`);

		const header = DNSHeader.write(defaultHeaders);

		// If you need to send additional data, like the query/answer sections, you would construct them here.
		const response = Buffer.concat([header]);

		udpSocket.send(response, remoteAddr.port, remoteAddr.address, (err) => {
			if (err) {
				console.error(`Error sending response: ${err}`);
			} else {
				console.log(`Response sent to ${remoteAddr.address}:${remoteAddr.port}`);
			}
		});
	} catch (e) {
		console.error(`Error handling message: ${e}`);
	}
});

udpSocket.on("error", (err) => {
	console.error(`UDP socket error: ${err.stack}`);
	udpSocket.close();
});
