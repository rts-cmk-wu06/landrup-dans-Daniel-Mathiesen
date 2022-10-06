const Activity = ({ activity }) => {
    return(
        <div className="px-8 bg-landrupPurple w-screen h-full pt-10">
          <a href={`/activity/${activity.id}`}>
          <div
            className="flex flex-col-reverse h-96 rounded-3xl mb-12)] bg-cover bg-center bg-no-repeat pt-10"
            style={{ backgroundImage: `url("${activity.asset.url}")` }}
          >
            <div className="bg-[#E1A1E9] flex flex-col justify-center items-start text-md font-bold px-3 h-[30%] w-full opacity-90 rounded-tr-[50px] rounded-bl-2xl">
              <p className="pb-2">{activity.name}</p>
              <p className="pb-2">{activity.minAge}-{activity.maxAge} år</p>
            </div>
          </div>
          </a>
      </div> 
    )
}

export default Activity