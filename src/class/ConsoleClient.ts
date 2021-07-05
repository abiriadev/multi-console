import net from 'net'
import { PORT } from '../index'

const timeout = 2000

export default class ConsoleClient {
    isconnected: boolean = false
    port: number = PORT
    socket?: net.Socket

    constructor(port: number = PORT) {
        this.untilrun()
    }

    untilrun() {
        this.connect().then(isSuccess => {
            this.isconnected = isSuccess

            if (isSuccess) {
                if (this.socket) {
                    
                }
            } else {
                setTimeout(() => {
                    this.untilrun()
                }, timeout)
            }
        })
    }

    connect(port: number = this.port): Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                const client = net.createConnection(
                    {
                        port,
                    },
                    () => {
                        console.log('connected!')

                        this.socket = client
                        resolve(true)
                    },
                )
                client
                    .on('data', data => {
                        console.log(data.toString())
                    })
                    .on('end', () => {
                        console.log('connection closed!')
                    })
                    .on(
                        'error',
                        (
                            err: Error & {
                                code: string
                            },
                        ) => {
                            if (err.code === 'ECONNREFUSED') {
                                console.log('fail')
                                resolve(false)
                            }
                        },
                    )
            } catch (err) {
                reject(err)
            }
        })
    }
}
