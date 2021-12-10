<?php

namespace App;

use LengthException;
class Dni
{
    private const VALID_LENGHT = 9;
    public function __construct(string $dni)
    {
        $this->checkDniHasValidLenght($dni);

        if(preg_match("/\d$/", $dni)){
            throw new \DomainException("Ends with a number");
        }
        throw new \DomainException("Ends with an invalid letter");
    }

    private function checkDniHasValidlength(string $dni):void{
        if (strlen($dni) !== self::VALID_LENGHT){
            throw new LengthException("Too long or too shoort");
        }
    }
}