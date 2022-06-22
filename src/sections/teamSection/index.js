import React from "react";
import "./styles.css";
import TeamFigure from "../../images/undraw_team_spirit.svg";
import ImgContainer from "../../components/imgContainer";
import OfficeTitle from "../../components/officeTitle";
import MemberCard from "../../components/memberCard";

const TeamSection = () => {
  return (
    <div id="team-section">
      <br />
      <h3 className="section-h3">
        <i>Hall</i> de membros
      </h3>
      <div className="team-section-container">
        <ImgContainer img={TeamFigure} />
        <div className="team-container">
          <OfficeTitle title="Histórico de presidentes" />
          <div className="member-area">
            <MemberCard
              name="John Lennon Sousa de Oliveira"
              office="1º Presidente"
            />
            <MemberCard
              name="Emanuella Ramabir Carvalho Cunha Gomes Abrantes"
              office="2ª presidente"
            />
          </div>
          <div className="member-area">
            <MemberCard name="Bruna" office="3ª presidente" />
            <MemberCard
              name="Anna Rayssa Lopes da Silveira"
              office="4ª presidente (Atual)"
            />
          </div>
          <br />
          <OfficeTitle title="Equipe Atual" />
          <div className="member-area">
            <MemberCard
              name="Enf. Anna Rayssa Lopes da Silveira"
              office="Presidente"
            />
            <MemberCard
              name="Servidora Maria Cândida Ferreira de Sousa"
              office="Departamento Financeiro"
            />
            <MemberCard
              name="Contabilista Santino Rodrigues"
              office="Consultor Administrativo"
            />
            <MemberCard
              name="Médico Dr. Rodrigo Carvalho Gundim"
              office="Responsável Técnico junto ao CRM-PA"
            />
            <MemberCard
              name="Robson Carneiro"
              office="Supervisor Operacional"
            />
            <MemberCard
              name="João Victor Morais"
              office="Desenvolvedor de Software"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
