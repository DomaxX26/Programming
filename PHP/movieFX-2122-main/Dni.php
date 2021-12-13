<?php

namespace App;

use LengthException;
class Dni
{
    private const VALID_LENGHT = 9;
    private  string $dni;

    public function __construct(string $dni)
    {
        $this->checkDniHasValidLenght($dni);

        if(preg_match("/\d$/", $dni)){
            throw new \DomainException("Bad format");
        }
        if("00000000T" !== $dni){
            throw new \InvalidArgumentException("Invalid dni");
        }
        if("00000001R" !== $dni){
            throw new \InvalidArgumentException("Invalid dni");
        }

        $this->dni = $dni;

    }

    public function __toString(): string
    {
        // TODO: Implement __toString() method.
        return $this->dni;
    }

    private function checkDniHasValidlength(string $dni):void{
        if (strlen($dni) !== self::VALID_LENGHT){
            throw new LengthException("Too long or too shoort");
        }
    }

}