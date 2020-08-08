
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
        companyCNJP: string, companyDescription: string, companyEmail: string)
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
        if(userEmail.split("@").length === 2 && userEmail !== '')
            return true
        throw "Invalid Email"
    }

    function checkCpf(userCpf: string){
        if(userCpf.length === 11)
            return true
        throw "CPF inválido"
    }

    function checkName(userName: string){
        if(userName !== '')
            return true
        throw "Nome inválido"
    }

    function checkCNPJ(cnpj: string){
        if(cnpj.length === 14)
            return true
        throw "CNPJ inválido."
    }

    function registerUser(userAddress: string, userCpf: string){
        checkCpf(userCpf)
        setUserAddress(userAddress)
        setUserCpf(userCpf)

        setLoading(true)
        Axios.post("/",{ userCpf, userAddress }).then( (response) => {
            Alert.alert("Registrado com sucesso.")
        }).catch( (err) => {
            throw err
        })
        setLoading(false)
    }

    function updateUserProfileImage(imageUrl: string){
        setUserProfileImage(imageUrl)

        setLoading(true)
        Axios.post("/", { userProfileImage }).then( (response) => {
            Alert.alert("Imagem alterada com sucesso.")
        }).catch( (err) => {
            throw err
        })
        setLoading(false)
    }

    function updateUserEmail(userEmail: string){
        checkEmail(userEmail)
        setUserEmail(userEmail)

        setLoading(true)
        Axios.post("/", { userEmail }).then( (response) => {
            Alert.alert("Email alterado com sucesso.")
        }).catch( (err) => {
            throw err
        })
        setLoading(false)
    }

    function updateUserPhone(userPhone: string){
        setUserPhone(userPhone)

        setLoading(true)
        Axios.post("/", { userPhone }).then( (response) => {
            Alert.alert("Telefone alterado com sucesso.")
        }).catch( (err) => {
            throw err
        })
        setLoading(false)
    }

    function updateAddress(userAddress: string){
        setUserAddress(userAddress)

        setLoading(true)
        Axios.post("/", { userAddress }).then( (response) => {
            Alert.alert("Endereço alterado com sucesso.")
        }).catch( (err) => {
            throw err
        })
        setLoading(false)
    }

    function updateUserName(userName: string){
        checkName(userName)
        setUserName(userName)

        setLoading(true)
        Axios.post("/", { userName }).then( (response) => {
            Alert.alert("Nome alterado com sucesso.")
        }).catch( (err) => {
            throw err
        })
        setLoading(false)
    }

    function registerCompany(companyName: string, companyAddress: string, companyCNJP: string, companyDescription: string, companyEmail: string){
        checkEmail(companyEmail)
        checkName(companyName)
        checkCNPJ(companyCNJP)

        setLoading(true)
        Axios.post("/", { companyName, companyAddress, companyCNJP, companyDescription, companyEmail }).then( (response) => {
            Alert.alert("Empresa cadastrada com sucesso.")
        }).catch( (err) => {
            throw err
        })
        setLoading(false)
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
