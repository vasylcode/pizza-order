import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

function Admin() {
	const [orders, setOrders] = React.useState([]);
	const [token, setToken] = React.useState(undefined);
	const [staff, setStaff] = React.useState([]);

	const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        axios.post('http://localhost:5000/api/auth/login', data)
        .then(response => {
			setToken(response.data.token);

			axios.get('http://localhost:5000/api/order/get')
			.then((json) => {
				setOrders(json.data.map(orders => orders));
			});

			axios.get('http://localhost:5000/api/auth/users')
			.then((json) => {
				setStaff(json.data.map(staff => staff));
			});
        });
    };

	const onSubmitReg = (data) => {
        axios.post('http://localhost:5000/api/auth/registration', data)
        .then(response => {
			alert(response.data.message);
        });
    };

	const onClickDelete = () => {
        if (window.confirm('Are you sure to delete this user?')) {
			axios.get('http://localhost:5000/api/auth/users')
			.then((json) => {
				setStaff(json.data.map(staff => staff));
			});
		}
    };

    return (
		<React.Fragment>
		{token ? (
		<div>
			<div className="content__top mx-4 mb-4 d-flex justify-content-around align-items-center">
				<div className="pizza__title">Admin</div>
			</div>
			<div className="admin">
			<div className="pizza__title">Orders</div>
				<table className="table table-hover table-borderless">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Email</th>
							<th scope="col">Name</th>
							<th scope="col">Adress</th>
							<th scope="col">Order</th>
							<th scope="col">Pay</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{orders.map((obj, index) => (
							<tr key={index}>
								<th scope="row">{index}</th>
								<td>{obj.email}</td>
								<td>{obj.name}</td>
								<td>{obj.address}</td>
								<td>{obj.food.map((object, ind) => object[0].name + ", ")}</td>
								<td>{obj.pay ? 'cash' : 'card'}</td>
								<td>delete</td>
							</tr>
						))}
					</tbody>
				</table>

				<div className="pizza__title">Staff</div>
				<table className="table table-hover table-borderless">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Email</th>
							<th scope="col">Name</th>
						</tr>
					</thead>
					<tbody>
						{staff.map((obj, index) => (
							<tr key={index}>
								<th scope="row">{index}</th>
								<td>{obj.email}</td>
								<td>{obj.name}</td>
							</tr>
						))}
					</tbody>
				</table>
				<form onSubmit={handleSubmit(onSubmitReg)}>
					<input type="email" placeholder="Email" {...register("email")} />
					<input type="text" placeholder="Name" {...register("name")} />
					<input type="password" placeholder="Password" {...register("password")} />
					<input type="submit" className="admin__button" value="Add new user" />
				</form>
			</div>
		</div>
		) : (
		<div>
			<div className="content__top mx-4 mb-4 d-flex justify-content-around align-items-center">
				<div className="pizza__title">Login</div>
			</div>
			<div className="admin text-center">
				<form onSubmit={handleSubmit(onSubmit)}>
					<input type="email" placeholder="Email" {...register("email")} />
					<input type="password" placeholder="Password" {...register("password")} />
					<input type="submit" className="admin__button" value="Login" />
				</form>
			</div>
		</div>
		)}

	</React.Fragment>
    )
}


export default Admin;
