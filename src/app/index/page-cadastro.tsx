import React, { useState } from "react";
import CheckBox from "@react-native-community/checkbox";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { styles } from "./styles-2";

export default function Register({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [aceito, setAceito] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("@/assets/logo-sem-fundo.png")}
          style={styles.trevo}
        />
        <View style={styles.tabs}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.tabText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text>Criar Conta</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.form}>
        <Text style={styles.subtitle}>Forneça as informações abaixo:</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          value={nome}
          onChangeText={setNome}
          placeholderTextColor="#aaa"
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#aaa"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={usuario}
          onChangeText={setUsuario}
          placeholderTextColor="#aaa"
        />

        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={telefone}
          onChangeText={setTelefone}
          placeholderTextColor="#aaa"
          keyboardType="phone-pad"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          placeholderTextColor="#aaa"
          secureTextEntry
        />

        <TouchableOpacity style={[styles.loginButton]}>
          <Text style={styles.loginButtonText}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
