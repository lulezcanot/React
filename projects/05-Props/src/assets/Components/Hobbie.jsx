

export const Hobbie = ({hobbies}) => {

  return (
    <div>
        {
            hobbies.map((hobby, index)=>(
                <li key={index}>{hobby}</li>
            )
                
            )
        }
    </div>
  )
}
