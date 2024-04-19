import { createClient} from "contentful";
import { useEffect , useState } from "react";

const client = createClient({
    space : '3dxwpemp3hsn',
    environment : 'master',
    accessToken : 'xti3rLjcWECdO24Po7Fgb3wlY_Oc4zbku-FP3B8JObY'
})


export const useFetchData = () => {
    const [loading , setLoading ] = useState(true)
    const [destinations , setDestinations] = useState([])
    const [crew , setCrew] = useState([])
    const [technology , setTechnology] = useState([])

    // get all destinations

    const getDestinations = async() => {

        try {
        const response = await client.getEntries({content_type : 'destinations'})
        const destinations = response.items.map((destination) => {
            const {name , description , distance ,travel , image} = destination.fields
            const img = image?.fields?.file?.url
            return {name , description , distance , travel , img}
        })
        setDestinations(destinations)            
        setLoading(false)
        } catch (error) {
        setLoading(false)
        console.log(error)
        }
    }

    // get all crew members

    const getCrew = async() => {

        try {
        const response = await client.getEntries({content_type : 'crew'})
        const crew = response.items.map((member) => {
            const {name , bio , role , image} = member.fields
            const img = image?.fields?.file?.url
            return {name , bio , role , img}
        })
        setCrew(crew)            
        setLoading(false)
        } catch (error) {
        setLoading(false)
        console.log(error)
        }
    }

    // get all technology

    const getTechnology = async() => {

        try {
        const response = await client.getEntries({content_type : 'technology'})
        const technology = response.items.map((tech) => {
            const {name , description , images} = tech.fields
            const imgs = images?.map((image) => {
                const url = image?.fields?.file?.url
                return url
            })
            return {name , description , imgs}
        })
        setTechnology(technology)            
        setLoading(false)
        } catch (error) {
        setLoading(false)
        console.log(error)
        }
    }


    useEffect(() => {
        getDestinations()
        getCrew()
        getTechnology()
    }, [])
    return {loading , destinations , crew , technology}
}