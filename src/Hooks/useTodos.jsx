import { useEffect, useState } from 'react'

const useTodos = () => {
  const [dateIcon, setDateIcon] = useState('')
  const [start, setStart] = useState(false)
  const date = new Date();
  const Hour = date.getHours();
  useEffect(() => {

    if (Hour < 12) {
      setDateIcon('https://res.cloudinary.com/dlkynkfvq/image/upload/v1685657211/1888282_obdvdr.png');
    } else if (Hour < 18) {
      setDateIcon('https://res.cloudinary.com/dlkynkfvq/image/upload/v1685657069/4814268_zzozim.png');
    } else {
      setDateIcon('https://res.cloudinary.com/dlkynkfvq/image/upload/v1685657146/7645197_zd91ht.png');
    }
  }, [Hour])

  return {
    dateIcon,
    start,
    setStart
  };
}

export default useTodos