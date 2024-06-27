import React from 'react';

const TerminosYCondiciones = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Términos y Condiciones</h1>
            <p style={styles.subHeader}>Términos y Condiciones de Uso de Cloud Hoops IPN</p>
            <ol style={styles.list}>
                <li style={styles.listItem}>
                    <strong>Aceptación de los Términos:</strong> Al utilizar este sitio y cualquiera de sus aplicaciones, el usuario acepta observar y sujetarse a los términos y condiciones aquí contenidos, así como a las políticas de privacidad y seguridad aplicables. Si alguno de estos términos es contrario a sus intereses, el usuario deberá abstenerse de utilizar este sitio.
                </li>
                <li style={styles.listItem}>
                    <strong>Obligaciones del Usuario:</strong> Al utilizar este sitio, el usuario se obliga a cumplir con los términos y condiciones de uso establecidos en este documento. El usuario reconoce haber leído, entendido y estar de acuerdo con estos términos y condiciones. Al acceder al sitio, el usuario acepta acatar lo anterior.
                </li>
                <li style={styles.listItem}>
                    <strong>Uso del Sitio:</strong> El sitio y los servicios ofrecidos se refieren exclusivamente a la normatividad vigente en los Estados Unidos Mexicanos. Los usuarios no residentes en los Estados Unidos Mexicanos deben asegurarse de que el acceso y uso del sitio, su contenido y servicios, les esté permitido conforme a su legislación. El uso del sitio es bajo la exclusiva responsabilidad del usuario.
                </li>
                <li style={styles.listItem}>
                    <strong>Autorización de Uso:</strong> Se autoriza al usuario a visualizar y descargar los materiales contenidos en el sitio solo para su uso personal y no comercial. El usuario debe conservar todos los avisos sobre derechos de autor y propiedad intelectual en todas las copias descargadas. El usuario no debe modificar, reproducir, mostrar públicamente, distribuir o utilizar los materiales con fines comerciales o públicos. El usuario no debe transferir los materiales a terceros.
                </li>
                <li style={styles.listItem}>
                    <strong>Modificaciones:</strong> Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones serán efectivas a partir de su publicación en el sitio. El uso continuado del sitio después de la publicación de cualquier modificación implica la aceptación de los términos y condiciones modificados.
                </li>
                <li style={styles.listItem}>
                    <strong>Suspensión del Servicio:</strong> Nos reservamos el derecho de suspender, interrumpir o dejar de operar el sitio y los servicios en cualquier momento, sin previo aviso.
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
};

export default TerminosYCondiciones;
