import React from "react";
import Material from "./Material";
import materialData from "../data/material";

const MaterialList = () => {
  const materials = materialData;
  console.log(materials);
  return (
    <div>
      {materials.map((material) => (
        <Material
          key={material.id}
          id={material.id}
          typeName={material.type.typeName}
          biosecurityLevel={material.technicalCharacteristics.biosecurityLevel}
          placeOfCultivation={
            material.technicalCharacteristics.placeOfCultivation
          }
          preservationMethods={
            material.technicalCharacteristics.preservationMethods
          }
        />
      ))}
    </div>
  );
};

export default MaterialList;
