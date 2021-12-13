<?php

declare(strict_types=1);

namespace Tests\Dojo;

use App\Dni;
use LengthException;
use PHPUnit\Framework\TestCase;

class DniTest extends TestCase
{
    public function testShouldFailWhenDniLongerThanMaxLenght()
    {
        $this->expectException(LengthException::class);
        $this->expectExceptionMessage('Too long');
        $dni = new Dni('0123456789');
    }

    public function testShoudldFailWhenDniShorterThanMinLength(){
        $this->expectException(LengthException::class);
        $this->expectErrorMessage("Too short");
        $dni = new Dni('01234567');
    }

    public function testShouldContructvalidDniEndingWithT(): void{
        $dni = new Dni("00000000T");
        $this->assertEquals("00000000T", (string) $dni);
    }

    public function testShouldContructvalidDniEndingWithR(): void{
        $dni = new Dni("00000001R");
        $this->assertEquals("00000001R", (string) $dni);
    }
}