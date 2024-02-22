
import useGenres from '../hooks/useGenres'
interface Genre {
    id: number,
    name: string
    }
const GenreList = () => {
    // const { genres } = useGenres()
    const { data } = useGenres()
  return (
    <ul>
        {data.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenreList