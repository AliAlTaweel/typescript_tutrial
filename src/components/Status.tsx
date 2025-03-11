type Props = {
    status: "loading" | "success" | "error" | "idle"
  }

function Status(status: Props) {
    let message;
   if ( status.status=== "loading") {
     message = "Loading..."
   }
   else if (status.status === "success") {
     message = "Data fetched successfully"
   }
   else if (status.status === "error") {
     message = "Error fetching data"
   }
   else {
     message = "No status"
   } 



  return (
    <div>Status : {message}</div>
  )
}

export default Status