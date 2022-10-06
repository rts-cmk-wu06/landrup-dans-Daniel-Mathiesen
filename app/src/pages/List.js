import ActivitySearch from '../components/ActivitySearch'

const ListPage = ({ searchResults }) => {
    const results = searchResults.map(activity => <ActivitySearch key={activity.id} activity={activity}/>)

    const content = results?.length ? results : <article><p className='text-white text-center'>Kunne ikke finde nogen aktiviteter</p></article>


    return (
        <div className='pt-16'>{content}</div>
    )
}

export default ListPage