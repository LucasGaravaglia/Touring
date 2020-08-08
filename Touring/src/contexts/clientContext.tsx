
import React, { createContext, useState } from 'react';
import { Alert } from "react-native"
import Axios from 'axios'

interface ClientContextData {
    userAddress: string,
    userCpf?: string,
    userEmail: string,
    userName: string,
    loading: boolean,
    userProfileImage: string,
    userPhone: string,
    registerUser: (userEmail: string, userCpf: string) => void,
    updateUserProfileImage: (imageUrl: string) => void,
    updateUserEmail: (userEmail: string) => void,
    updateUserPhone: (userPhone: string) => void,
    updateAddress: (userAddress: string) => void,
    updateUserName: (userName: string) => void,
    registerCompany: (companyName: string, companyAddress: string,
        companyCNPJ: string, companyDescription: string, companyEmail: string)
        => void
}

export const ClienteContext = createContext<ClientContextData>({} as ClientContextData);

const ClientProvider: React.FC = ({ children }) => { 

    const [ userAddress, setUserAddress ] = useState('')
    const [ userCpf, setUserCpf ] = useState('')
    const [ userPhone, setUserPhone ] = useState('')
    const [ userProfileImage, setUserProfileImage] = useState('')
    const [ userEmail, setUserEmail ] = useState('')
    const [ userName, setUserName ] = useState('')

    const [ loading, setLoading ] = useState(false)

    function checkEmail(userEmail: string){
        if(userEmail.split("@").length !== 2 && userEmail === '')
            throw "Email inválido"
    }

    function checkCpf(userCpf: string){
        if(userCpf.length !== 11)
            throw "CPF inválido."
    }

    function checkName(name: string){
        if(name === '')
            throw "Nome inválido."
    }

    function checkCNPJ(cnpj: string){
        if(cnpj.length !== 14)
            throw "CNPJ inválido."
    }

    function sendToDatabase(route,data,successMessage){
        setLoading(true)
        Axios.post("/"+route,data).then( ( response ) => {
            Alert.alert(successMessage)
        }).catch( ( err ) => {
            throw err
        })
        setLoading(false)
    }

    function registerUser(userAddress: string, userCpf: string){
        try{
            checkCpf(userCpf)
            setUserAddress(userAddress)
            setUserCpf(userCpf)
            sendToDatabase("",{ userCpf, userAddress },"Registrado com sucesso.")
        }catch(err) {
            throw err
        }
    }

    function updateUserProfileImage(imageUrl: string){
        try{
            setUserProfileImage(imageUrl)
            sendToDatabase("",{ userProfileImage },"Imagem alterada com sucesso.")
        } catch(err) {
            throw err
        }
    }

    function updateUserEmail(userEmail: string){
        try{
            checkEmail(userEmail)
            setUserEmail(userEmail)
            sendToDatabase("",{ userEmail },"Email alterado com sucesso.")
        } catch(err) {
             throw err
        }
    }

    function updateUserPhone(userPhone: string){
        try{
            setUserPhone(userPhone)
            sendToDatabase("",{ userPhone },"Telefone alterado com sucesso.")
        } catch(err) {
            throw err
        }
    }

    function updateAddress(userAddress: string){
        try{
            setUserAddress(userAddress)
            sendToDatabase("",{ userAddress },"Endereço alterado com sucesso.")
        } catch(err) {
            throw err
        }
    }

    function updateUserName(userName: string){
        try{
            checkName(userName)
            setUserName(userName)
            sendToDatabase("",{ userName },"Nome alterado com sucesso.")
        } catch(err) {
            throw err
        }
    }

    function registerCompany(companyName: string, companyAddress: string, companyCNPJ: string, companyDescription: string, companyEmail: string){
        try{
            checkEmail(companyEmail)
            checkName(companyName)
            checkCNPJ(companyCNPJ)
            sendToDatabase("",{ companyName, companyAddress, companyCNPJ, companyDescription, companyEmail },"Empresa cadastrada com sucesso.")
        } catch(err) {
            throw err
        }
    }

  return (
    <ClienteContext.Provider value={
      {
        registerUser,
        registerCompany,
        updateUserProfileImage,
        updateUserEmail,
        updateUserPhone,
        updateAddress,
        updateUserName,
        userAddress,
        userPhone,
        userEmail,
        userName,
        loading,
        userProfileImage
      }
    }>
      {children}
    </ClienteContext.Provider>
  )
}

export default ClientProvider;
