import React, { useState, useEffect } from 'react';
import { getUserProfile, updateUserProfile } from '../services/api';

const Profile = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [fullName, setFullName] = useState('');
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        const fetchUserProfile = async () => {
            const { data } = await getUserProfile();
            setUserProfile(data);
            setFullName(data.fullName);
            setAvatar(data.avatar);
        };
        fetchUserProfile();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateUserProfile({ fullName, avatar });
        // Optionally update state or show confirmation
    };

    if (!userProfile) return <div>Loading...</div>;

    return (
        <div>
            <h2>User Profile</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" />
                <input type="text" value={avatar} onChange={(e) => setAvatar(e.target.value)} placeholder="Avatar URL" />
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default Profile;
