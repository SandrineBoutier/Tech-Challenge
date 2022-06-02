import React, { Component } from 'react';
import './AddFetchArgonauts.css';


export class AddFetchArgonauts extends Component {
    static displayName = AddFetchArgonauts.name;

    constructor(props) {
        super(props);
        this.state = { argonauts: [], loading: true, value: '' };
        this.addArgonaut = this.addArgonaut.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.retrieveArgonauts();
    }

    static renderArgonautsList(argonauts) {
        return (
            <>
                <div className="container">
                    <div className="row">
                        {argonauts.map(argonaut =>
                            <div className="col-4 text-start ps-5" key={argonaut.id}> {argonaut.name} </div>)}
                    </div>
                </div>
            </>
        );
    }


    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleClick(event) {
        this.addArgonaut().then(this.retrieveArgonauts());
        this.setState({ value: '' })
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Chargement...</em></p>
            : AddFetchArgonauts.renderArgonautsList(this.state.argonauts);

        return (
            <>
                <div className='container text-center justify-content-center'>
                    <div className='mb-2'>
                        <h2>Ajouter un(e) Argonaute</h2>
                        <p>Nom de l'Argonaute</p>
                    </div>
                    <div className='input-group d-flex justify-content-center'>
                        <input type='text' className='form-control' autoComplete='off' name="name" value={this.state.value} onChange={this.handleChange} />
                        <button type="button" className="btn btn-light" id="button-addon2" onClick={this.handleClick}>Envoyer</button>
                    </div>
                    <div>
                        <h2 className='d-flex justify-content-center'>Membres de l'équipage</h2>
                        {contents}
                    </div>
                </div>
            </>
        );
    }

    // Méthode pour récupérer les argonautes (READ)
    async retrieveArgonauts() {
        const response = await fetch('argonaut');
        const data = await response.json();
        this.setState({ argonauts: data, loading: false });
    }

    // Méthode pour ajouter un argonaute (CREATE)
    async addArgonaut() {
        var myheaders = new Headers();
        myheaders.append("Content-Type", "application/json")
        // si qqch a bien été saisi ds le champ et stocké ds "value" alors on déclenche un appel API 
        // via la méthode "AddArgonaut()" de mon controller.
        if (this.state.value.length > 0) {
            let newArgonaut = { name: this.state.value };
            fetch('argonaut', {
                headers: myheaders,
                method: 'POST',
                body: JSON.stringify(newArgonaut)
            })
        }

    }

}
