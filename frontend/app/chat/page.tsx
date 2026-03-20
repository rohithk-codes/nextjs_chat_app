"use client"

import { useEffect,useState } from "react"
import { socket } from "../components/lib/socket"
import API from "../components/services/api"

 const chatPge = ()=>{

    const [message ,setMessage] = useState("")
    const[messages,setMessages] = useState<any[]>([])

    const roomId = "1"

    useEffect(()=>{
        //join room
        socket.emit("join_room",roomId)

        //load old messages
        const fetchMessages = async()=>{
            const res = await API.get(`/messages/${roomId}`)
            setMessages(res.data)
        }
        fetchMessages()
        //listen for new messages
        socket.on("receive_message",(data)=>{
            setMessages((prev)=>[...prev,data])
        })
    },[])

    const sendMessage = ()=>{
        const data = {roomId,message,senderId:1}

        socket.emit("send_message",data)
        setMessage("")
    }

    return (
        <div className="p-10">

            <div className="border h-80 overflow-auto mb-4">

            </div>

        </div>
    )


}

export default chatPge