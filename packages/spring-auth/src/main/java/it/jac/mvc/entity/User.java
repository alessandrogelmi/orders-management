package it.jac.mvc.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

/**
 * The persistent class for the utenti database table.
 * 
 */
@Entity
@Table(name = "utenti")
public class User implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private long idUtente;

	@Column(name = "cod_utente")
	private int codUtente;

	@Size(min = 3, max = 10)
	@Column(name = "nome")
	private String nome;

	@Column(name = "cognome")
	private String cognome;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Column(name = "data_nascita")
	private Date dataNascita;

	@Column(name = "username")
	private String username;

	@Column(name = "password")
	private String password;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "data_ins")
	private Date dataIns;

	@Version
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "data_mod")
	private Date dataMod;

	@Column(name = "utente_ins")
	private String utenteIns;

	@Column(name = "utente_mod")
	private String utenteMod;

	public User() {
	}

	public long getIdUtente() {
		return idUtente;
	}

	public void setIdUtente(long idUtente) {
		this.idUtente = idUtente;
	}

	public int getCodUtente() {
		return codUtente;
	}

	public void setCodUtente(int codUtente) {
		this.codUtente = codUtente;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCognome() {
		return cognome;
	}

	public void setCognome(String cognome) {
		this.cognome = cognome;
	}

	public Date getDataNascita() {
		return dataNascita;
	}

	public void setDataNascita(Date dataNascita) {
		this.dataNascita = dataNascita;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getDataIns() {
		return dataIns;
	}

	public void setDataIns(Date dataIns) {
		this.dataIns = dataIns;
	}

	public Date getDataMod() {
		return dataMod;
	}

	public void setDataMod(Date dataMod) {
		this.dataMod = dataMod;
	}

	public String getUtenteIns() {
		return utenteIns;
	}

	public void setUtenteIns(String utenteIns) {
		this.utenteIns = utenteIns;
	}

	public String getUtenteMod() {
		return utenteMod;
	}

	public void setUtenteMod(String utenteMod) {
		this.utenteMod = utenteMod;
	}

}