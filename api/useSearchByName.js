import {useState} from 'react';
import {Platform} from 'react-native';
import {API_URL} from '../server/Config';
import ConfigSingleton from '../server/ConfigSingleton';

const useSearchByName = () => {
  const googleApiKey = ConfigSingleton.getValueForKey('googleApiKey');

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getSearchByName = async value => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${value}&key=${googleApiKey}`,
      );
      let text = await response.text();

      if (Platform.OS === 'android') {
        text = text.replace(/\r?\n/g, '').replace(/[\u0080-\uFFFF]/g, '');
      }

      try {
        result = JSON.parse(text);
      } catch (error) {
        throw `${JSON.stringify(body, 0, 2)}\n${text}`;
      }

      if (result.status === 'OK') {
        setData(result.results);
        setError(null);
      } else {
        setError(result);
        setData(null);
      }
    } catch (error) {
      console.log('Error ' + options);
      console.log('Error ' + error);
      setData(null);
      setError(error);
    }
  };

  return {data, error, getSearchByName};
};

export default useSearchByName;
