import useData from "./useData";

interface Platform {
    id: string;
    name: string;
    slug: string
}

const usePlatForms = ()=>useData<Platform>('/platforms/lists/parents')
export default usePlatForms