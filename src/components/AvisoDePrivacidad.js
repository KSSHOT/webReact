import React from 'react';

const AvisoDePrivacidad = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Aviso de Privacidad</h1>
            <p style={styles.subHeader}>Aviso de Privacidad de Cloud Hoops IPN</p>
            <ol style={styles.list}>
                <li style={styles.listItem}>
                    <strong>Responsable del Tratamiento de Datos Personales:</strong> La Coordinación de la Plataforma de Registro de Alumnos del Instituto Politécnico Nacional (IPN), con domicilio en Av Instituto Politécnico Nacional & Gustavo A. Madero 1936, Lindavista, Gustavo A. Madero, 07738 Ciudad de México, CDMX, es la responsable del tratamiento de los datos personales que se recaban a través de esta plataforma.
                </li>
                <li style={styles.listItem}>
                    <strong>Datos Personales Recabados:</strong> Los datos personales recabados incluyen: nombre, correo electrónico, CURP, acta de nacimiento, INE, foto, y constancia de inscripción. Estos datos serán utilizados exclusivamente para el registro de alumnos en competencias y actividades deportivas organizadas por el IPN.
                </li>
                <li style={styles.listItem}>
                    <strong>Finalidad del Tratamiento de Datos:</strong>
                    <ul style={styles.subList}>
                        <li>Facilitar el registro de alumnos en competencias.</li>
                        <li>Validar la autenticidad y vigencia de los documentos proporcionados.</li>
                        <li>Evitar la duplicación de registros y la falsificación de datos.</li>
                        <li>Permitir la actualización segura de documentos.</li>
                    </ul>
                </li>
                <li style={styles.listItem}>
                    <strong>Uso de Documentos Digitales:</strong> Los documentos digitales recabados serán procesados mediante herramientas de Reconocimiento Óptico de Caracteres (OCR) con el fin de validar su contenido. Estos documentos se almacenarán en la nube a través de los servicios de AWS.
                </li>
                <li style={styles.listItem}>
                    <strong>Medidas de Seguridad:</strong> La plataforma implementa medidas de seguridad administrativas, técnicas y físicas para proteger los datos personales contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado.
                </li>
                <li style={styles.listItem}>
                    <strong>Derechos ARCO:</strong> El titular de los datos personales tiene derecho a acceder, rectificar, cancelar u oponerse (ARCO) al tratamiento de sus datos personales. Para ejercer estos derechos, puede dirigirse personalmente a la Coordinación de la Plataforma de Registro de Alumnos del IPN en Av Instituto Politécnico Nacional & Gustavo A. Madero 1936, Lindavista, Gustavo A. Madero, 07738 Ciudad de México, CDMX, o a través del número telefónico 55 5729 6000.
                </li>
                <li style={styles.listItem}>
                    <strong>Transferencia de Datos Personales:</strong> Los datos personales no serán transferidos a terceros sin su consentimiento, salvo en los casos previstos en la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados y demás normatividad aplicable.
                </li>
                <li style={styles.listItem}>
                    <strong>Cambios en el Aviso de Privacidad:</strong> Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones a este aviso de privacidad.
                </li>
                <li style={styles.listItem}>
                    <strong>Consentimiento:</strong> Al proporcionar sus datos personales a través de esta plataforma, el usuario acepta y consiente el tratamiento de sus datos conforme a lo establecido en este aviso de privacidad.
                </li>
            </ol>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '800px',
        margin: '20px auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        overflowY: 'auto',
        height: 'calc(100vh - 40px)',
    },
    header: {
        fontSize: '2em',
        color: '#4b1037',
        borderBottom: '2px solid #e5c7d1',
        paddingBottom: '10px',
    },
    subHeader: {
        fontSize: '1.2em',
        color: '#4b1037',
        margin: '20px 0',
    },
    list: {
        lineHeight: '1.6',
        color: '#333',
        paddingLeft: '20px',
    },
    listItem: {
        marginBottom: '10px',
    },
    subList: {
        listStyleType: 'disc',
        paddingLeft: '20px',
        marginTop: '10px',
        marginBottom: '10px',
    },
};

export default AvisoDePrivacidad;
