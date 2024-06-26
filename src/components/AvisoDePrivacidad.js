// src/components/AvisoDePrivacidad.js
import React from 'react';

const AvisoDePrivacidad = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Aviso de Privacidad</h1>
            <p>Aviso de Privacidad de Cloud Hoops IPN</p>
            <ol>
                <li>
                    <strong>Responsable del Tratamiento de Datos Personales:</strong> La Coordinación de la Plataforma de Registro de Alumnos del Instituto Politécnico Nacional (IPN), con domicilio en Av Instituto Politécnico Nacional & Gustavo A. Madero 1936, Lindavista, Gustavo A. Madero, 07738 Ciudad de México, CDMX, es la responsable del tratamiento de los datos personales que se recaban a través de esta plataforma.
                </li>
                <li>
                    <strong>Datos Personales Recabados:</strong> Los datos personales recabados incluyen: nombre, correo electrónico, CURP, acta de nacimiento, INE, foto, y constancia de inscripción. Estos datos serán utilizados exclusivamente para el registro de alumnos en competencias y actividades deportivas organizadas por el IPN.
                </li>
                <li>
                    <strong>Finalidad del Tratamiento de Datos:</strong>
                    <ul>
                        <li>Facilitar el registro de alumnos en competencias.</li>
                        <li>Validar la autenticidad y vigencia de los documentos proporcionados.</li>
                        <li>Evitar la duplicación de registros y la falsificación de datos.</li>
                        <li>Permitir la actualización segura de documentos.</li>
                    </ul>
                </li>
                <li>
                    <strong>Uso de Documentos Digitales:</strong> Los documentos digitales recabados serán procesados mediante herramientas de Reconocimiento Óptico de Caracteres (OCR) con el fin de validar su contenido. Estos documentos se almacenarán en la nube a través de los servicios de AWS.
                </li>
                <li>
                    <strong>Medidas de Seguridad:</strong> La plataforma implementa medidas de seguridad administrativas, técnicas y físicas para proteger los datos personales contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado.
                </li>
                <li>
                    <strong>Derechos ARCO:</strong> El titular de los datos personales tiene derecho a acceder, rectificar, cancelar u oponerse (ARCO) al tratamiento de sus datos personales. Para ejercer estos derechos, puede dirigirse personalmente a la Coordinación de la Plataforma de Registro de Alumnos del IPN en Av Instituto Politécnico Nacional & Gustavo A. Madero 1936, Lindavista, Gustavo A. Madero, 07738 Ciudad de México, CDMX, o a través del número telefónico 55 5729 6000.
                </li>
                <li>
                    <strong>Transferencia de Datos Personales:</strong> Los datos personales no serán transferidos a terceros sin su consentimiento, salvo en los casos previstos en la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados y demás normatividad aplicable.
                </li>
                <li>
                    <strong>Cambios en el Aviso de Privacidad:</strong> Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones a este aviso de privacidad.
                </li>
                <li>
                    <strong>Consentimiento:</strong> Al proporcionar sus datos personales a través de esta plataforma, el usuario acepta y consiente el tratamiento de sus datos conforme a lo establecido en este aviso de privacidad.
                </li>
            </ol>
        </div>
    );
}

export default AvisoDePrivacidad;
