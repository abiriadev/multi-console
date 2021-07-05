import net from 'net'
import increaseID from '../utils/increaseID'
import { PORT as _PORT } from '../index'

export default class {
    id: string
    cache: Array<any>
    sockets: Array<net.Socket> = []
    server: net.Server
    isServerRunning: boolean = false

    constructor(id = increaseID(), PORT: number = _PORT) {
        this.id = '' + id
        this.cache = []

        const server = net
            .createServer(sok => {
                console.log(`sok!!!`)
                sok.write('server: dsdssd')
                this.sockets.push(sok)
            })
            .listen(PORT, () => {
                console.log(`listening at ${PORT}`)

                this.isServerRunning = true
            })

        this.server = server
        // server.on('error', reject)
    }

    log(message: string) {
        if (this.sockets.length > 0) {
            this.sockets.forEach(socket => {
                socket.write(message)
            })
        } else {
            this.cache.push(message)
        }
    }
}
