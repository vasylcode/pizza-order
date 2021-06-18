import React from 'react';

function Admin() {
    return (
        <React.Fragment>
            <div class="content__top mx-4 mb-4 d-flex justify-content-around align-items-center">
				<div class="content__top-item active">Orders</div>
				<div class="pizza__title">Admin</div>
				<div class="content__top-item">Staff</div>
			</div>
			<div class="admin">
				<table class="table table-hover table-borderless">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Email</th>
							<th scope="col">Name</th>
							<th scope="col">Adress</th>
							<th scope="col">Order</th>
							<th scope="col">Pay</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</th>
							<td>mail</td>
							<td>name</td>
							<td>@fsdfdsfsdfsdfsd</td>
							<td>orderfsdfssdsfdsfsdf5gdfgdfgdfgdfgdfgdfgdf435vddsfsddfsdffdo</td>
							<td>yes</td>
						</tr>
					</tbody>
				</table>
            </div>
        </React.Fragment>
    )
}

export default Admin;
