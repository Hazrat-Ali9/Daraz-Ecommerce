import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Approved = () => {
    const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pendingProducts,setPendingProducts] = useState([])

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = () => {
    fetch("http://localhost:7000/role")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setRoles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  };
 

  

  const approveRole = (roleId) => {
    fetch(`http://localhost:7000/role/${roleId}/approve`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        // Refresh roles after approval
        fetchRoles();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const rejectRole = (roleId) => {
    fetch(`http://localhost:7000/role/${roleId}/reject`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        fetchRoles();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleApprove = async (productId) => {
    try {
      await axios.put(`http://localhost:7000/product/${productId}/approve`);
      console.log('Product approved successfully');
    } catch (error) {
      console.error('Error approving product:', error);
    }
  };

  const handleReject = async (productId) => {
    try {
      await axios.put(`http://localhost:7000/product/${productId}/reject`);
      console.log('Product rejected successfully');
    } catch (error) {
      console.error('Error rejecting product:', error);
    }
  };

    return (
        <div>
            <h2>Admin Approval</h2>
      <ul>
        {roles.map((role) => (
          <li key={role._id}>
            {role.userName} - {role.role} - Status: {role.status}
            {role.status === 'pending' && (
              <>
                <button onClick={() => approveRole(role._id)}>Approve</button>
                <button onClick={() => rejectRole(role._id)}>Reject</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <div>
        <h2>Admin Actions</h2>
        {pendingProducts.map((product) => (
          <div key={product.productId}>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <button onClick={() => handleApprove(product.productId)}>Approve</button>
            <button onClick={() => handleReject(product.productId)}>Reject</button>
          </div>
        ))}
      </div>
        </div>
    );
};

export default Approved;