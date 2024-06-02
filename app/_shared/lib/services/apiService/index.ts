export const apiService = {
    getUrl: (path?: string) => {
        const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL ?? 'http://localhost:4000'

        return path ? `${serverUrl}${path}` : serverUrl
    }
}
