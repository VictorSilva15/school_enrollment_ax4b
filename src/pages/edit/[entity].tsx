/* eslint-disable react-hooks/rules-of-hooks */
// Next
import Router, { useRouter } from "next/router";
import NavLink from "next/link";

// Styles
import SEditPage from "./styles";

// Own hooks
import { useGetData } from "../../hooks/useFetch";
import { useDeleteData } from "../../hooks/useDelete";

// Type of the API response
import { APIResponse } from "../../components/Dashboard";

// Forms
import { StudentForm } from "../../components/Forms/Student";
import { TeacherForm } from "../../components/Forms/Teacher";

// Icons
import { BiArrowBack } from "react-icons/bi/index";
import { FaTrash } from "react-icons/fa/index";

// Framer Motion
import { motion } from "framer-motion";

// framer motion variants

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

export default function EditPage() {
  const router = useRouter();

  const { entity, cpf } = router.query;

  let informations;

  if (entity === "students" && cpf?.length === 11) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    informations = useGetData<APIResponse[]>("students", cpf as string);
  } else if (entity === "teachers" && cpf?.length === 11) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    informations = useGetData<APIResponse[]>("teachers", cpf as string);
  } else {
    return <h1>Erro</h1>;
  }

  return (
    <SEditPage>
      <div className="turnsBackLink">
        <NavLink href="/" passHref>
          <BiArrowBack size="26" />
        </NavLink>
      </div>

      <div
        className="excludeButton"
        onClick={() => {
          useDeleteData(`${entity}/${cpf}`);
          alert("Os dados foram apagados. Você será redirecionado!");
          Router.push("/");
        }}
      >
        <FaTrash size="26" />
      </div>

      <div className="formsContainer">
        <div className="formTemplate">
          {entity === "students" ? (
            <StudentForm
              studentData={informations?.data}
              method="put"
              cpfToUpdate={cpf as string}
            />
          ) : (
            <TeacherForm
              teacherData={informations?.data}
              method="put"
              cpfToUpdate={cpf as string}
            />
          )}
        </div>
      </div>

      <div className="formsInformations">
        <motion.h1
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 2,
          }}
        >
          Olá, aqui você pode editar informações de <span>Estudantes</span> e{" "}
          <span>professores</span>
        </motion.h1>
        <motion.img
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 2,
          }}
          src="/assets/editPage.png"
          alt="Edit Page"
        />
      </div>
    </SEditPage>
  );
}
