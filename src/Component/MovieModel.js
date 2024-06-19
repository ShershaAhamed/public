


  function MovieModal({model,status,setStatus}){



 return(
 <div className="modal" tabindex="-1" id="model-container">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Movie-title : {model[0] ?.title}</h5>
       
      </div>
      <div className="modal-body">
        <p>Language     : {model[0]?.original_language}</p>
        <p>Summary      : {model[0]?.overview} </p>
        <p>Release Data : {model[0]?.release_date}</p>

      </div>
     
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=> setStatus((pre)=> pre = false)}>Close</button>
       
      
    </div>
  </div>
</div>
      )
  }

  export default MovieModal;