import React, { useContext, useState } from 'react';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import { CgAttachment } from 'react-icons/cg';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore';
import { v4 as uuid } from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from '../firebase.init';
const Input = () => {
    const [text, setText] = useState('');
    const [img, setImg] = useState(null);

    const { currentUser } = useContext(AuthContext)
    const { data } = useContext(ChatContext);
    const handleSend = async () => {
        
        if (img) {
            const storageRef = ref(storage, uuid());
            console.log("hrllo")
            await uploadBytesResumable(storageRef, img).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try {
                        await updateDoc(doc(db, "chats", data.chatId), {
                            messages: arrayUnion({
                                id: uuid(),
                                text,
                                senderId: currentUser.uid,
                                date: Timestamp.now(),
                                img: downloadURL
                            })
                        })
                    } catch (err) {
                        console.log(err);
                      
                    }
                });
            });

        } else {
    
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                  id: uuid(),
                  text,
                  senderId: currentUser.uid,
                  date: Timestamp.now(),
                }),
              });
        }

        await updateDoc(doc(db, 'userChats', currentUser.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId+".date"]: serverTimestamp(),
        })

        await updateDoc(doc(db, 'userChats', data.user.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId+".date"]: serverTimestamp(),
        })

        setText('')
        setImg(null)

    }

    return (
        <div className="bg-white relative" >
            <input type="text" className="h-16 p-4 w-full" value={text} placeholder="Type Something" onChange={(e) => setText(e.target.value)} />

            <div className="absolute top-1/2 -right-8 transform -translate-x-1/2 -translate-y-1/2 ">
                <div className="flex items-center gap-3" >

                    <label htmlFor="file"><CgAttachment className='text-xl text-slate-600 cursor-pointer' /></label>
                    <input type="file" name="" id="file" onChange={e => setImg(e.target.files[0])} className='hidden' />
                    <MdOutlineAddPhotoAlternate className="text-xl text-slate-600 cursor-pointer" />
                    <button onClick={handleSend}className=' text-sm rounded-lg  px-5 py-2 text-white bg-gray-500 hover:bg-slate-700 transition-all' >Send</button>
                </div>

            </div>
        </div>
    );
};

export default Input;