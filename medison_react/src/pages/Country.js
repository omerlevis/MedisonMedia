import React, {Component} from "react";
import axios from "axios";
import { Link, Route, Switch } from 'react-router-dom';

class Country extends Component
{
    state = {
        countries: [],
        loading: true,

    }
   async componentDidMount() {
        const res = await axios.get('http://localhost:8000/api/countries');
        if (res.data.status === 200)
        {
            this.setState({

                countries: res.data.countries,
                loading: false,
            });
        }
   }

    deleteCountry  = async (e,id) => {
        const rowCountrytoDelete = e.currentTarget;
        const res = await axios.delete('http://localhost:8000/api/delete-country/'+id);
        if(res.data.status===200)
        {
            rowCountrytoDelete.closest('tr').remove();
            console.log(res.data.message);
        }

    }

    openPopup = async (e,id) => {
    const url = '/edit-country/'+id;
    const name = 'Popup Window';
        const width = 500;
        const height = 400;
        const left = window.innerWidth / 2 - width / 2;
        const top = window.innerHeight / 2 - height / 2;
        const specs = `width=${width},height=${height},left=${left},top=${top}`;

        window.open(url, name, specs);
};

    render() {
        var countries_HTMLTABLE="";
        if(this.state.loading)
        {
            countries_HTMLTABLE= <tr><td colSpan='4'> <h2>Loading...</h2></td></tr>
        }
        else
        {
            countries_HTMLTABLE= this.state.countries.map( (item) => {
                return (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.iso}</td>
                    <td> <button onClick={(e) =>this.openPopup(e,item.id)} className='btn btn-primary btn-sm'>
                        Edit Country</button></td>
                    <td><button type='button' onClick={(e) => this.deleteCountry(e, item.id)}
                                className='btn btn-danger btn-sm'>Delete</button>
                    </td>
                </tr>
                );
            });
        }

        return(

          <div className='container'>
              <div className='row'>
                  <div className='col-md-9'>
                      <div className='card'>
                          <div className='card-header'>
                             Countries List
                          </div>
                          <div className='card-body'>
                              <table className='table table-bordered table striped'>
                                  <thead>
                                  <tr>
                                      <th>Name</th>
                                      <th>ISO</th>
                                      <th>Edit</th>
                                      <th>Delte</th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  {countries_HTMLTABLE}
                                  </tbody>

                              </table>

                          </div>
                      </div>
                  </div>
              </div>
          </div>
        );
    }

}

export default Country;
