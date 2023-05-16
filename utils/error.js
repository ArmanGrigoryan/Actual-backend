class ApiError extends Error{
    constructor(status,message,errors=[]){
        super()
        this.status = status;
        this.message = message;
        this.errors = errors;
    }

    static badRequest(message){
        return new ApiError(400,  message )
    }

    static notFound(){
        return new ApiError(404, "not found")
    }
}

module.exports = ApiError;