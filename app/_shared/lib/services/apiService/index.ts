interface ApiServiceType {
    getUrl: (path?: string) => string
}

export const apiService: ApiServiceType = {
    getUrl: (path) => {
        const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL ?? 'http://localhost:4000'

        return path ? `${serverUrl}${path}` : serverUrl
    }
}
