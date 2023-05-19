import React, {Component} from "react";
import axios from "axios";
import swal from "sweetalert";
class EditCountry extends Component
{
    state = {
        name: '',
        iso: '',
        error_list: [],
    }

    handleInput = (e) => {
        this.setState({
           [e.target.name]: e.target.value
        });
    }
    async componentDidMount() {
        //const country_id = this.props.match.params.id;
        const countryEditElement = document.getElementById('edit-country');
        const country_id = countryEditElement.getAttribute('data-country-id');
        const res = await axios.get('http://localhost:8000/api/edit-country/'+country_id);
        if(res.data.status ===200)
        {
            this.setState({
                name: res.data.country.name,
                iso: res.data.country.iso,
            });
        }
    }

    updateCountry = async (e) => {
       // const country_id = this.props.match.params.id;
        const countryEditElement = document.getElementById('edit-country');
        const country_id = countryEditElement.getAttribute('data-country-id');
        e.preventDefault();

        document.getElementById('updatebtn').innerText = 'Updating';
        try {
            const res = await axios.put('http://localhost:8000/api/update-country/'+country_id,this.state);
                console.log(res.data.message);
            this.setState({
                error_list: [],
            });
                swal({
                    title:"Success!",
                    text: res.data.message,
                    icon: "success",
                    button: "OK!",
                })
                document.getElementById('updatebtn').innerText = 'Update Country';
        }
        catch(error) {
            this.setState({
                error_list: error.response.data.errors,
            });
            console.log("Error in country update:");
            document.getElementById('updatebtn').innerText = 'Update Country';

        }
    }

    render() {
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-md 4'>
                        <div className='card'>
                            <div className='card-header'>
                                Edit Country
                            </div>
                            <div className='card-body'>
                                <form onSubmit={this.updateCountry}>
                               <div className='form-group mb-3'>
                                    <label>Country Name</label>
                                    <input type='text' name='name' onChange={this.handleInput} value={this.state.name} className='form-control'/>
                               </div>
                                    <span className='text-danger'>{this.state.error_list.name}</span>
                                    <div className='form-group mb-3'>
                                        <label>ISO</label>
                                        <input type='text' name='iso' onChange={this.handleInput} value={this.state.iso} className='form-control'/>
                                        <span className='text-danger'>{this.state.error_list.iso}</span>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <button type='submit' id='updatebtn' className='btn btn-primary'>Update Country</button>
                                    </div>
                                </form>

                               </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }

}

export default EditCountry;
