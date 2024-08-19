const  History= ()=>{
    return(
        <div className="w-5/12 flex flex-col gap-3"> 
         <div className="border-b py-2 border-gray-300">History</div> 
         <div className="bg-white flex  justify-between px-4 border-r-8 border-teal-600">
            <p>Cash</p>
            <p>+500</p>
            </div>
            <div className="bg-white flex  justify-between px-4 border-r-8 border-red-600">
            <p>Book</p>
            <p>-40</p>
            </div>
            <div className="bg-white flex  justify-between px-4 border-r-8 border-red-600">
            <p>Camera</p>
            <p>-200</p>
            </div>
            
         </div>
    )
}

export default History