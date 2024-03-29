import usePlatForms from "./usePlatForms"

const usePlatform = (id?:number) => {

    const { data: platforms } = usePlatForms() 
  return platforms?.results.find(p => p.id === id)

}

export default usePlatform