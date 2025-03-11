type Props = {
    obj: {
        firstName: string,
        lastName: string
    }[];
};

function SayHello({obj}:Props) {   

  return (
    <div>
        <ul>
            {obj.map((item)=> (
                <li key={item.firstName}> {item.firstName} {item.lastName}</li>
            ))}
        </ul>
    </div>
  )
}

export default SayHello