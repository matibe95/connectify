import { useParams } from 'react-router-dom';

export const useGetUrlParams = () => {
    const { profileName } = useParams();
    const encodedLinks = new URLSearchParams(location.search).get('links') || ''
    return {profileName, encodedLinks};
  };