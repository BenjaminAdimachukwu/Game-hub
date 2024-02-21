import axios from 'axios'

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: '260496fa70ce4e50894c2fbbcf157427'
    }
})