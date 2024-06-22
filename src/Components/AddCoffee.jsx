import Swal from 'sweetalert2';

const AddCoffee = () => {
    const handleCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name=form.name.value;
        const quantity=form.quantity.value;
        const supplier=form.supplier.value;
        const test=form.test.value;
        const category=form.category.value;
        const photo=form.photo.value;


        const newCoffee={name,quantity,supplier,test,category,photo};
        console.log(newCoffee);

        //send data to the server
        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Coffee added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })


    }

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Add a Coffee</h2>
            <form onSubmit={handleCoffee}>
                {/* form name & quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" className="input input-bordered w-full"
                                placeholder="Coffee Name" />
                        </label>

                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" className="input input-bordered w-full"
                                placeholder="Available Quantity" />
                        </label>

                    </div>
                </div>
                {/* form supplier & test row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" className="input input-bordered w-full"
                                placeholder="Supplier Name" />
                        </label>

                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Test</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="test" className="input input-bordered w-full"
                                placeholder="Test" />
                        </label>

                    </div>
                </div>
                {/* form category & details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" className="input input-bordered w-full"
                                placeholder="Category" />
                        </label>

                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" className="input input-bordered w-full"
                                placeholder="Details" />
                        </label>

                    </div>
                </div>
                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" className="input input-bordered w-full"
                                placeholder="Photo URL" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="ADD COFFEE" className="btn btn-block bg-black text-white" />
            </form>
        </div>
    );
};

export default AddCoffee;